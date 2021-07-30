import DocumentEdit from "../DocumentEdit";
import { mount,configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DocumentContextProvider from "../../Contexts/DocumentContext";
import { MemoryRouter } from "react-router-dom";
configure({adapter: new Adapter()});
describe('verify Document Edit page is working', () => {

    test("verify page is loaded and Edit document text is visible", () => {
    const wrapper= mount(
        <MemoryRouter>
          <DocumentContextProvider>
          <DocumentEdit/>
          </DocumentContextProvider>
         
        </MemoryRouter>
      );
      expect(wrapper.find('[data-testid="menu"]').text()).not.toEqual("")
    });
    
  })