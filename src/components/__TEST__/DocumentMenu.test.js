import DocumentMenu from "../DocumentMenu";
import { mount,configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DocumentContextProvider from "../../Contexts/DocumentContext";
import { MemoryRouter } from "react-router-dom";
configure({adapter: new Adapter()});
describe('verify Document Menu page is working', () => {

    test("verify page is loading and menu option text is displaying", () => {
    const wrapper= mount(
        <MemoryRouter>
          <DocumentContextProvider>
          <DocumentMenu/>
          </DocumentContextProvider>
         
        </MemoryRouter>
      );
      expect(wrapper.find('[data-testid="editMenu"]').text()).not.toEqual("")
    });
    
  })