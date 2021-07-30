import { useGetApi } from "../useGetApi";
import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "fetch-mock";
import { act } from "react-test-renderer";

describe("useDataApi", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterAll(() => {
    fetchMock.restore();
  });

  it("should return data with a successful request", async () => {
    const { result } = renderHook(() => useGetApi());
    fetchMock.mock("http://localhost:52773/document/v1/getDocumentDetails", {"DocumentType":"Others","DocumentDescription":"this is very good text","DocumentValidatedBy":["Administrator","Provider","Insurance Vendor","Others"]});
    await act(async () => {
      result.current.callApi("http://localhost:52773/document/v1/getDocumentDetails");
    });

    expect(result.current.data).toEqual({"DocumentType":"Others","DocumentDescription":"this is very good text","DocumentValidatedBy":["Administrator","Provider","Insurance Vendor","Others"]});
  });
});