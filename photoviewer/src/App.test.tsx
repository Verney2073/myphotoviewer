import React from 'react';
import { useState } from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react';
//the below renderer does not work unless you call it in this 'named' way
//it seems to be related to renderer being a commonJS module, whereas we are working in Typescript
import * as renderer from 'react-test-renderer';
import App from './App';
import { getImageUrls, SecondaryPhotos } from './photoviewer/imageselector';

test('renders Hello world text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/My Photo Viewer/i);
    expect(textElement).toBeInTheDocument();
});

test('getImageUrls list generates the expected list of image URLS', () => {
    const imageUrls = getImageUrls();
    const brokenImageOne = "https://picsum.photos/id/624/1600/900.jpg"
    expect(imageUrls[0]).toBe("https://picsum.photos/id/600/1600/900.jpg");
    expect(imageUrls.includes(brokenImageOne)).toEqual(false);
});

test.only("App Should render without error", async () => {
    const appComponent = render(<App />);
    const imageToClick = appComponent.getByTestId("https://picsum.photos/id/600/1600/900.jpg")
    //wait no longer seems to be imported from react-testing-library which is where it should come from; 
    //instead I have used waitFor but not sure they are exactly equivalent
    //await waitFor(() => appComponent.getByText("My Photo Viewer"));
    fireEvent.click(imageToClick)
    await waitFor(() => imageToClick.className.includes("selected-image"))
});


describe('photoviewer/imageselector', () => {
    //n.b. must be an async test as components are being rendered that may not be ready for the tests
    test('SecondaryPhotos renders with the same functionality each time loaded', async () => {
        const imageUrls = getImageUrls();
        //the two variables below should useState(), but this needs to be within a component function so doesn't work here.
        //Should it be within the SecondaryPhotos Component, or should it be tested like this?
        let imageUrl = imageUrls[5];
        const setImageUrl = function setImageUrl() { imageUrl = imageUrls[10] };
        const secondaryPhotosComponent = renderer.create(<SecondaryPhotos
            srcArray={imageUrls}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl} />).toJSON();

        expect(secondaryPhotosComponent).toMatchSnapshot();

    })
})