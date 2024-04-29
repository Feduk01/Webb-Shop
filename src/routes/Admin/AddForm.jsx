function AddForm(){
    return(
        <div className="form-container">
             <div className="form-column2">
            <input className="add-img" type='file'/>
                <button>Add Product</button>
            </div>
            <div className="form-column">
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Category"  />
                <input type="text" placeholder="Price"/>
            </div>
        </div>
    )
}

export default AddForm