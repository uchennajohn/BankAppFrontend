import React, { createContext } from "react";
import {apiGet, apiPost} from "../utils/api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const dataContext = createContext();



const DataProvider = ({ children }) => {
  //  const [getVendors, setGetVendors] = React.useState([])
    const [getUserTransaction, setGetUserTransction] = React.useState([])
  
    /**==============Registration======= **/
    const RegisterConfig = async (formData) => {
      try {
        const registerData = {
          email: formData.email,
          password: formData.password,
          name: formData.name,
          accountNumber: formData.accountNumber,
        };
        await apiPost("/auth/signup", registerData).then((res) => {
            console.log(res)
          toast.success(res.data.message);
          localStorage.setItem("signature", res.data.token);
          setTimeout(() => {
            window.location.href = "/login";
          }, 5000);
        });
      } catch (err) {
        toast.error(err.response.data.Error);
      }
    };
  
    
    
  
    /**==============Login ======= **/
    const LoginConfig = async (formData) => {
      try {
        const LoginData = {
          email: formData.email,
          password: formData.password,
          accountNumber: formData.accountNumber,
        };
        await apiPost("/auth/login", LoginData)
          .then((res) => {
            toast.success(res.data.message);
            localStorage.setItem("signature", res.data.token);
            localStorage.setItem("userId", res.data.userId);
          
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 2000);
          })
          .catch((err) => {
           // toast.error(err.response.data.Error);
           console.log(err)
          });
      } catch (err) {
       // toast.error(err.response.data.Error);
       console.log(err)
      }
    };
 //Get Transaction History
    const GetTransactionHistory = async (userId) => {
        try {
          await apiGet(`/transactions/history/${userId}`).then((res) => {
            setGetUserTransction([...res.data.transaction]);  
          });
        } catch (err) {
          console.log(err)
        }
      };


      /**==============Withdrawal ======= **/
  const WithdrawalConfig = async (formData, userId) => {
    try {
      const WithdrawData = {
        amount: formData.amount,
        
      };
      await apiPost(`/transactions/withdraw/${userId}`, WithdrawData)
        .then((res) => {
          toast.success(res.data.message);
          setTimeout(() => {
            window.location.href = `/history/${localStorage.getItem(
              "userId"
            )}`;
          }, 2000);
        })
        .catch((err) => {
          toast.error(err.response.data.Error);
        });
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };

  /**==============Deposit ======= **/
  const DepositConfig = async (formData, userId) => {
    try {
      const DepositData = {
        amount: formData.amount,
        depositorName: formData.depositorName,
      };
      await apiPost(`/transactions/deposit${userId}`, DepositData)
        .then((res) => {
          toast.success(res.data.message);
          setTimeout(() => {
            window.location.href = `/history/${localStorage.getItem(
              "userId"
            )}`;
          }, 2000);
        })
        .catch((err) => {
          toast.error(err.response.data.Error);
        });
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };
   


  const GetCurrentAccountBalance = async (userId) => {
    try {
      await apiGet(`/transaction/balance/${userId}`).then((res) => {
        const accountBalance = res.data.accountBalance;
        toast.success(
          `Your current account balance is ${accountBalance} Naira`
        );
      });
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.Error);
    }
  };
  
  
  
  
    return (
      <dataContext.Provider
        value={{
          RegisterConfig,
          LoginConfig,
          GetTransactionHistory,
          WithdrawalConfig,
          GetCurrentAccountBalance,
          DepositConfig
          
        }}
      >
        {children}
      </dataContext.Provider>
    );
  };
  
  export const useAuth = () => {
    const context = React.useContext(dataContext);
    if (context === "undefined") {
      throw new Error("useAuth must be used within the auth provider");
    }
    return context;
  };
  
  export default DataProvider;