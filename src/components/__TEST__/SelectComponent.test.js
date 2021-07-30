import SelectComponent from "../SelectComponent";
import { mount,configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DocumentContextProvider from "../../Contexts/DocumentContext";
import { MemoryRouter } from "react-router-dom";
configure({adapter: new Adapter()});
describe('verify select component page is working', () => {

    test("verify select component is loaded and dropdown text is exist", () => {
    const wrapper= mount(
        <MemoryRouter>
          <DocumentContextProvider>
          <SelectComponent/>
          </DocumentContextProvider>
         
        </MemoryRouter>
      );
      expect(wrapper.find('[data-testid="Select-Desc"]').text()).not.toEqual("")
    });
    
  })