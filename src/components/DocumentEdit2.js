const DocumentEdit2=()=>
{
    return (
        <div className="List-Head">
            <div className="Menu-Head">
                <h1>
                    <BsArrowLeftShort type="button" onClick={()=>{this.backTo()}}/>
                </h1>
                <h4>
                    <span className="d-block p-2">Enter Description</span>
                </h4>
            </div>
            <div>
                <h1>
                    <IoMdCheckmark type="button" onClick={()=>{this.saveValues()}} />
                </h1>
            </div>
        </div>
    )
}
