/// This class is store and retrieve the information document details
Class Document.StoreDetails Extends (%Persistent, %JSON.Adaptor)
{

Property DocumentType As %String(MAXLEN = 100);

Property DocumentDescription As %String(MAXLEN = "");

Property DocumentValidatedBy As list Of %String;

/// function - which returns the list of document types
/// output - JSON array of objects
ClassMethod getDocumentTypes() As %String
{
	Set json=[{"value":1,"display":"Standard"},{"value":2,"display":"Others"}]
	Quit json.%ToJSON()
}

/// function - which returns the list of document need to validate by
/// output - JSON array of objects
ClassMethod getDocumentValidatedBy() As %String
{
	Set json=[{"value":1,"display":"Administrator"},{"value":2,"display":"Provider"},{"value":3,"display":"Insurance Vendor"},{"value":4,"display":"Others"}]
	Quit json.%ToJSON()
}

/// function - which returns the list of document need to validate stored information
/// output - JSON array of objects
ClassMethod getDocumentDetails() As %String
{
	Set ret={}
	if ##class(Document.StoreDetails).%ExistsId(1)
	{
		Set obj=##class(Document.StoreDetails).%OpenId(1)
		Set ret.DocumentType=obj.DocumentType
		Set ret.DocumentDescription=obj.DocumentDescription
		Set array=[]
		For inc=1:1:obj.DocumentValidatedBy.Count()
		{
			Do array.%Push(obj.DocumentValidatedBy.GetAt(inc))
		}
		Set ret.DocumentValidatedBy=array
	}
	Quit ret.%ToJSON()
}

ClassMethod saveDocumentDetails(json)
{
	Set ret={"Result":"Ok"}
	if ##class(Document.StoreDetails).%ExistsId(1)
	{
		Set obj=##class(Document.StoreDetails).%OpenId(1)
	}
	else
	{
		Set obj=##class(Document.StoreDetails).%New()
	}
	Set obj.DocumentType=json.%data("DocumentType")
	Set obj.DocumentDescription=json.%data("DocumentDescription")
	Do obj.DocumentValidatedBy.Clear()
	Set obj.DocumentValidatedBy=json.%data("DocumentValidatedBy")
	Do obj.%Save()
	Quit ret.%ToJSON()
}

Storage Default
{
<Data name="DocumentValidatedBy">
<Attribute>DocumentValidatedBy</Attribute>
<Structure>subnode</Structure>
<Subscript>"DocumentValidatedBy"</Subscript>
</Data>
<Data name="StoreDetailsDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>DocumentType</Value>
</Value>
<Value name="3">
<Value>DocumentDescription</Value>
</Value>
</Data>
<DataLocation>^Document.StoreDetailsD</DataLocation>
<DefaultData>StoreDetailsDefaultData</DefaultData>
<IdLocation>^Document.StoreDetailsD</IdLocation>
<IndexLocation>^Document.StoreDetailsI</IndexLocation>
<StreamLocation>^Document.StoreDetailsS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
