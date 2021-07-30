import TextAreaComponent from "../TextAreaComponent";
import { mount,configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DocumentContextProvider from "../../Contexts/DocumentContext";
import { MemoryRouter } from "react-router-dom";
configure({adapter: new Adapter()});
describe('verify Text Area Component is working', () => {

    test("verify text area page is loading and text area text is visible", () => {
    const wrapper= mount(
        <MemoryRouter>
          <DocumentContextProvider>
          <TextAreaComponent/>
          </DocumentContextProvider>
         
        </MemoryRouter>
      );
      expect(wrapper.find('[data-testid="txt"]').text()).not.toEqual("")
    });
    
  })