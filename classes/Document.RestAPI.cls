Class Document.RestAPI Extends %Atelier.REST
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>
	<Route Url="/getDocumentDetails" Method="GET" Call="GetDocumentDetails" Cors="true"/>
	<Route Url="/getAllDocumentTypes" Method="GET" Call="GetAllDocumentTypes" Cors="true"/>
	<Route Url="/getDocumentValidatedBy" Method="GET" Call="GetDocumentValidatedBy" Cors="true"/>
	<Route Url="/saveDocumentDetails" Method="POST" Call="SaveDocumentDetails" Cors="true"/>
</Routes>
}

/// Rest API - to get stored document details 
ClassMethod GetDocumentDetails() As %Status
{
	#dim tSC As %Status = $$$OK
	Write ##class(Document.StoreDetails).getDocumentDetails()
	Quit tSC
}

/// Rest API- to get all document types
ClassMethod GetAllDocumentTypes() As %Status
{
	#Dim tSC As %Status = $$$OK
	Write ##class(Document.StoreDetails).getDocumentTypes()
	Quit tSC
}

/// Rest API- to get all document types
ClassMethod GetDocumentValidatedBy() As %Status
{
	#Dim tSC As %Status = $$$OK
	Write ##class(Document.StoreDetails).getDocumentValidatedBy()
	Quit tSC
}

ClassMethod SaveDocumentDetails() As %Status
{
	#Dim tSC As %Status=$$$OK
	Do ##class(Ens.Util.JSON).JSONStreamToObject(%request.Content,.tProxy)
	Write ##class(Document.StoreDetails).saveDocumentDetails(tProxy)
	Quit tSC
}

}
