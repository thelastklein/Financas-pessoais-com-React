import { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/header";
import { Dashboard } from "./components/dashboard";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
     
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard/>
     <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
     <GlobalStyle/>
    
    </TransactionsProvider>
  );
}


