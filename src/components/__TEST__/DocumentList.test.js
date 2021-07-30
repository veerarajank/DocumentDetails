import DocumentList from "../DocumentList";
import { mount,configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DocumentContextProvider from "../../Contexts/DocumentContext";
import { MemoryRouter } from "react-router-dom";
configure({adapter: new Adapter()});
describe('verify Document List page is working', () => {

    test("verify document description is loaded or not", () => {
    const wrapper= mount(
        <MemoryRouter>
          <DocumentContextProvider>
          <DocumentList/>
          </DocumentContextProvider>
         
        </MemoryRouter>
      );
      expect(wrapper.find('[data-testid="Desc"]').text()).not.toEqual("")
    });
    
  })