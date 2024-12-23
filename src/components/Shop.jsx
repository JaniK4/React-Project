
import { useDispatch, useSelector } from 'react-redux';
import { depositMoney, withdrawMoney } from '../state/action-creators'; 

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);  
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h4 className="mb-3">Deposit / Withdraw Money</h4>
        <div className="d-flex flex-row align-items-center justify-content-center fw-semibold">
          <button 
            className="btn btn-warning me-3" 
            onClick={() => dispatch(withdrawMoney(50))} 
          >
            -
          </button>
          <p className="m-0">Current Balance: ${balance}</p>
          <button 
            className="btn btn-warning ms-3" 
            onClick={() => dispatch(depositMoney(50))} 
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
