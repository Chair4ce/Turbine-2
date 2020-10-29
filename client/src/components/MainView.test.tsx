import React from "react";
import {render, fireEvent, waitFor} from "@testing-library/react";
import client from "../apolloClient";
import {ApolloProvider} from "@apollo/client";
import MainView, {Props} from "../components/MainView";

function renderMainView(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        onSubmit() {
            return;
        },
    }
    return render(
        <ApolloProvider client={client}>
            <MainView {...defaultProps} {...props} />
        </ApolloProvider>
    );
}

test('should render a loading message while fetching data', async () => {
    const onSubmit = jest.fn();
    const {findByTestId} = renderMainView({onSubmit});
    const mainView = await findByTestId("main-view");
    expect(mainView.className).toBe("main_view");
    expect(mainView).toHaveTextContent("Loading...");
});

test('should render a list of sites from the testing data set', async () => {
    const {getByText} = renderMainView();

    await waitFor(() => {
       expect(getByText("DGS-1")).toBeTruthy();
    })

});

test('should run the onSubmit callback from props on button click', async () => {
    const onSubmit = jest.fn();
    const {findByTestId} = renderMainView({onSubmit});

    const submit = await findByTestId("btn-submit");

    fireEvent.click(submit)
    expect(onSubmit).toHaveBeenCalled();
});



