import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import client from "../apolloClient";
import {ApolloProvider} from "@apollo/client";

function renderMainView() {
    return render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );
}

test('renders the app', async () => {
    const {findByTestId} = renderMainView();
    const app = await findByTestId("app");
    expect(app).toBeTruthy();
});

test('contains a child called mainView', async () => {
    const {findByTestId} = renderMainView();
    const app = await findByTestId("app");
    const firstChild = app.firstElementChild;
    expect(firstChild!.className).toBe("mainView");
});
