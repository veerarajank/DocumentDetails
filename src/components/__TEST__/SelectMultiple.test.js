import SelectComponent from "../SelectComponent";
import { mount,configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DocumentContextProvider from "../../Contexts/DocumentContext";
import { MemoryRouter } from "react-router-dom";
configure({adapter: new Adapter()});
describe('verify select multiple component page is working', () => {

    test("verify select multiple component is loaded and drop down is working", () => {
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