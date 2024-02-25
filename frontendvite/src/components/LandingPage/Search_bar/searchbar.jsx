import Form from 'react-bootstrap/Form';
import { BiSearch } from 'react-icons/bi';
import "./searchbar.css"

const SearchBar = () => {
    return (
        <div className="container">
           <div className="row searchbar">
                <div className="col-md-9">
                    <div className="input-group">
                        <input className="form-control border-secondary py-2" type="search" value="What do you want to learn?" />
                        <div>
                        <Form.Select aria-label="Default select example">
                            <option>Select</option>
                            <option value="1">Blockchain</option>
                            <option value="2">Cyber Security</option>
                            <option value="3">Machine Learning</option>
                        </Form.Select>
                        </div>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">
                                <BiSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
