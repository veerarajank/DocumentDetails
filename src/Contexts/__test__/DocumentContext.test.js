// Context API with Rest API unit testing
import {useContext} from "react"
import { DocumentContext,DocumentContextProvider } from "../DocumentContext";
import { mount, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});
// clear existing mocks
jest.clearAllMocks();
describe("DocumentContextAPI",()=>
{
    it("store and retrieval validation",()=>
    {
        // create test component using context API
        const TestComponent=()=>
        {
            const {data,setData}=useContext(DocumentContext);
            return(
                <div>
                    <div data-testid="type">
                        {data.DocumentType}
                    </div>
                    <div data-testid="desc">
                        {data.DocumentDescription}
                    </div>
                    <div data-testid="validate">
                        {data.DocumentValidatedBy.toString()}
                    </div>
                    <button id="beforetype" onClick={()=>{setData({DocumentDescription:data.DocumentDescription,DocumentType:"",DocumentValidatedBy:data.DocumentValidatedBy})}}></button>
                    <button id="aftertype" onClick={()=>{setData({DocumentDescription:data.DocumentDescription,DocumentType:"Standard",DocumentValidatedBy:data.DocumentValidatedBy})}}></button>
                    <button id="beforedesc" onClick={()=>{setData({DocumentDescription:"",DocumentType:data.DocumentType,DocumentValidatedBy:data.DocumentValidatedBy})}}></button>
                    <button id="afterdesc" onClick={()=>{setData({DocumentDescription:"test",DocumentType:"Standard",DocumentValidatedBy:data.DocumentValidatedBy})}}></button>
                    <button id="beforevalidate" onClick={()=>{setData({DocumentDescription:data.DocumentDescription,DocumentType:data.DocumentType,DocumentValidatedBy:[]})}}></button>
                    <button id="aftervalidate" onClick={()=>{setData({DocumentDescription:data.DocumentDescription,DocumentType:data.DocumentType,DocumentValidatedBy:["test"]})}}></button>
                </div>
            )
        }
        const wrapper =mount(<DocumentContextProvider><TestComponent/></DocumentContextProvider>)
         //document type test cases
        wrapper.find("#beforetype").simulate('click')
        expect(wrapper.find('[data-testid="type"]').text()).toEqual("")
        wrapper.find('#aftertype').simulate('click')
        expect(wrapper.find('[data-testid="type"]').text()).toEqual("Standard")

        //document description test cases
        wrapper.find("#beforedesc").simulate('click')
        expect(wrapper.find('[data-testid="desc"]').text()).toEqual("")
        wrapper.find('#afterdesc').simulate('click')
        expect(wrapper.find('[data-testid="desc"]').text()).toEqual("test")

         //document validation by  test cases
         wrapper.find("#beforevalidate").simulate('click')
         expect(wrapper.find('[data-testid="validate"]').text()).toEqual("")
         wrapper.find('#aftervalidate').simulate('click')
         expect(wrapper.find('[data-testid="validate"]').text()).toEqual("test")
    })
    
    
})