import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import API, { getItems, createItem, updateItem, deleteItem } from "./API";
import edit_icon from "../Image/edit_icon.png"
import delete_icon from "../Image/delete_icon.png"
import axios from "axios";


const Additems = ({ onAdd }) => {
  const [selectItems, setSelectitems] = useState([]);
  const [itemId, setItemId] = useState("");
  const [item_number, setItemnumber] = useState("");
  const [feature_name, setFeaturename] = useState("");
  const [feature_state, setFeaturestate] = useState("");
  const [assigned_user, setAssignuser] = useState("");
  const [total_test_excuted, setTestexecuted] = useState("");
  const [test_passed, setTestpassed] = useState("");
  const [test_failed, setTestfailed] = useState("");
  const [errors, setErrors] = useState({});



  useEffect(() => {
    refreshItems();
  }, []);

  const refreshItems = () => {
    getItems()
      .then((res) => {
        const items = res.data;
        const sortedItems = items.sort((a, b) => a.item_number - b.item_number);
        setSelectitems(sortedItems);
      })
      .catch((error) => {
        console.error("Error getting items:", error);
      });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};
  
    
    if (!item_number) {
      newErrors.item_number = "Item number is required.";
      isValid = false;
    }
  
   
    if (!feature_name) {
      newErrors.feature_name = "Feature name is required.";
      isValid = false;
    }
  
    
    if (!feature_state) {
      newErrors.feature_state = "Feature state is required.";
      isValid = false;
    }
  
    
    if (!assigned_user) {
      newErrors.assigned_user = "Assigned user is required.";
      isValid = false;
    }
  
    
    if (!total_test_excuted) {
      newErrors.total_test_excuted = "Total test executed is required.";
      isValid = false;
    }
  
    
    if (!test_passed) {
      newErrors.test_passed = "Test passed is required.";
      isValid = false;
    }
  
    
    if (!test_failed) {
      newErrors.test_failed = "Test failed is required.";
      isValid = false;
    }
  
    setErrors(newErrors);
    return isValid;
  };
  
  
  const onSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      let item = {
        item_number,
        feature_name,
        feature_state,
        assigned_user,
        total_test_excuted,
        test_passed,
        test_failed,
      };
      
      createItem(item)
        .then(() => {
          refreshItems();
          
          setItemnumber("");
          setFeaturename("");
          setFeaturestate("");
          setAssignuser("");
          setTestexecuted("");
          setTestpassed("");
          setTestfailed("");
          setErrors({});
        })
        .catch((error) => {
          console.error("Error creating item:", error);
        });
    }
  };
  

  const onUpdate = (id) => {
    console.log("on update id:::", id)
    let item = { id,
      item_number,
      feature_name,
      feature_state,
      assigned_user,
      total_test_excuted,
      test_passed,
      test_failed, 
    };
    updateItem(id, item)
      .then((res) => refreshItems())
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };

  const onDelete = (id) => {
    deleteItem(id)
      .then((res) => {
        refreshItems();
        
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  
   function SelectItems(id) {
    
    const item = selectItems.find((item) => item.id === id);
    console.log("::::::::",selectItems, item.id)
      setItemId(item.id);
      setItemnumber(item.item_number);
      setFeaturename(item.feature_name);
      setFeaturestate(item.feature_state);
      setAssignuser(item.assigned_user);
      setTestexecuted(item.total_test_excuted);
      setTestpassed(item.test_passed);
      setTestfailed(item.test_failed);
    
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className="float-left">Create a new Items</h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicItemnumber">
              <Form.Label>Item Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Number"
                value={item_number}
                onChange={(e) => setItemnumber(e.target.value)} 
                isInvalid={!!errors.item_number} 
                />
                <Form.Control.Feedback type="invalid"> 
                  {errors.item_number}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFeaturename">
              <Form.Label>Feature Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={feature_name}
                onChange={(e) => setFeaturename(e.target.value)} 
                isInvalid={!!errors.feature_name} 
                />
                <Form.Control.Feedback type="invalid"> 
                  {errors.feature_name}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFeaturestate">
              <Form.Label>Feature State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter State"
                value={feature_state}
                onChange={(e) => setFeaturestate(e.target.value)}
                isInvalid={!!errors.feature_state}
                />
                <Form.Control.Feedback type="invalid"> 
                  {errors.feature_state}
                </Form.Control.Feedback>     
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAssignuser">
              <Form.Label>Assigned User</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User"
                value={assigned_user}
                onChange={(e) => setAssignuser(e.target.value)} 
                isInvalid={!!errors.assigned_user} 
                />
                <Form.Control.Feedback type="invalid"> 
                  {errors.assigned_user}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTestexecuted">
              <Form.Label>Total Test Executed</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter testexecuted"
                value={total_test_excuted}
                onChange={(e) => setTestexecuted(e.target.value)} 
                isInvalid={!!errors.total_test_excuted} 
                />
                <Form.Control.Feedback type="invalid">
                  {errors.total_test_excuted}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTestpassed">
              <Form.Label>Test Passed</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter testpassed"
                value={test_passed}
                onChange={(e) => setTestpassed(e.target.value)} 
                isInvalid={!!errors.test_passed} 
                />
                <Form.Control.Feedback type="invalid"> 
                  {errors.test_failed}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTestfailed">
              <Form.Label>Test Failed</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter testfailed"
                value={test_failed}
                onChange={(e) => setTestfailed(e.target.value)} 
                isInvalid={!!errors.test_failed} 
                />
                <Form.Control.Feedback type="invalid"> 
                  {errors.test_failed}
                </Form.Control.Feedback>
            </Form.Group>

            <div className="float-right">
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                className="mx-2"
              >
                save
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => { onUpdate(itemId) }}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr No.</th>
                <th scope="col">Item Number</th>
                <th scope="col">Feature Name</th>
                <th scope="col">Feature State</th>
                <th scope="col">Assign User</th>
                <th scope="col">Test Executed</th>
                <th scope="col">Test Passed</th>
                <th scope="col">Test Failed</th>
              </tr>
            </thead>
            <tbody>

              {selectItems.map((item, index) => {
                console.log("item", item)
                return (
                  <tr key={item.id}>
                    
                    <td>{index + 1}</td>
                    <td> {item.item_number}</td>
                    <td>{item.feature_name}</td>
                    <td>{item.feature_state}</td>
                    <td>{item.assigned_user}</td>
                    <td>{item.total_test_excuted}</td>
                    <td>{item.test_passed}</td>
                    <td>{item.test_failed}</td>
                    <td>
                      <img
                      src={edit_icon}
                      alt="edit_icon"
                      height={30}
                      width={30}
                      onClick={() => SelectItems(item.id)}
                      />
                    </td>
                    <td>
                      <img src={delete_icon} 
                      alt="delete_icon"
                      height={30} 
                      width={30}
                      onClick={() => onDelete(item.id)}
                      />
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Additems;










// const refreshItems = () => {
  //   console.log("refreshItems")
  //   API.get("/")
  //     .then((res) => {
  //       console.log("res", res)
  //       setSelectitems(res.data);
  //       console.log(res.data)
        // setItemnumber(res.data);
        // setItemnumber(res[0].itemnumber);
        // setFeaturename(res[0].featurename);
        // setFeaturestate(res[0].featurestate);
        // setItemId(res[0].id);
        // setTestfailed(res[0].testfailed);
        // setAssignuser(res[0].assignuser);
        // setTestpassed(res[0].testpassed);
        // setTestexecuted(res[0].testexecuted);
      
  //     .catch(error => {
  //       console.log("error", error)
  //       console.error()
  //     });
  // }

  // const onSubmit = (e) => {
  //   console.log("")
  //   e.preventDefault();
  //   let item = { item_number, feature_name, feature_state, assigned_user, total_test_excuted, test_passed ,test_failed};
  //   debugger
  //   API.post("/", item).then(() => refreshItems());
  // }



  // const clearForm = () => {
  //   setItemId("");
  //   setItemnumber("");
  //   setFeaturename("");
  //   setFeaturestate("");
  //   setAssignuser("");
  //   setTestexecuted("");
  //   setTestpassed("");
  //   setTestfailed("")
  // };

  // const onSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  // console.log(searchTerm)
  // const filteredItems = selectItems.filter((item) => {
  //   const { item_number, feature_name, feature_state, assigned_user } = item;
  //   const searchValue = searchTerm.toLowerCase();
  //   return (
  //     item_number.toLowerCase().includes(searchValue) ||
  //     feature_name.toLowerCase().includes(searchValue) ||
  //     feature_state.toLowerCase().includes(searchValue) ||
  //     assigned_user.toLowerCase().includes(searchValue)
  //   );
  // });
  // const onUpdate = (id) => {
  //   // let item = { item_number };
  //   // API.patch(`${id}/`, item).then((res) => refreshItems());
  //   let item = { itemId };
  //   axios
  //   .patch("http://127.0.0.1:8000/api/Items/${id}/", item)
  //   .then((res) => refreshItems())
  //   .catch((error) => {
  //     console.error("Error updating item:", error);
  //   });
  // }

  // const onDelete = (id) => {
  //   // API.delete(`${id}/delete`).then((res) => refreshItems());
  //   axios
  //   .delete("http://127.0.0.1:8000/api/Items/${id}/delete")
  //   .then((res) => refreshItems())
  //   .catch((error) => {
  //     console.error("Error deleting item:", error);
  //   });
  // }

  // function SelectItems(id) {
  //   // let item = selectItems.find((Items) => Items.id === id)[0];
  //   const item = selectItems.find((item) => item.id === id);
  //   console.log("::::::::",selectItems, item.id)
  //   // setItemId(item.itemId);
  //   // setItemnumber(item.item_number);
  //   // setFeaturename(item.feature_name);
  //   // setFeaturestate(item.feature_state);
  //   // setAssignuser(item.assigned_user);
  //   // setTestexecuted(item.total_test_excuted);
  //   // setTestpassed(item.test_passed);
  //   // setTestfailed(item.test_failed);
  //   // setItemId(item.itemId);


  {/* <td>
                      <i
                        className="fa fa-trash-o text-danger d-inline mx-3"
                        aria-hidden="true"
                        onClick={() => onDelete(item.item_number)}
                      ></i>
                    </td> */}
{/* <Button onClick={() => SelectItems(item.item_number)}>edit</Button> */}
   