import Modal from 'react-modal';
import arrowupimg from '../../assets/arrow-up.svg'
import arrowdownimg from '../../assets/arrow-down.svg'
import closeImg from '../../assets/close.svg'
import { Container, RadioBox, TransactiontypeContainer} from './styles';
import {useState} from 'react'


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType] = useState('deposit')
    
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose} 
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
            
            <button type="button" onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt='Fechar Modal'/>
            </button>

            <Container>
                
                <h2>Cadastrar transação</h2>

                <input placeholder='Título'/>

                <input type="number" placeholder='Valor'/>

                <TransactiontypeContainer>
                    <RadioBox type='button' onClick={()=>{setType('deposit')}} isActive={type === 'deposit'}> <img src={arrowdownimg} alt='Entrada'/> <span>Entrada</span> </RadioBox>

                    <RadioBox type='button' onClick={()=>{setType('withdraw')}} isActive={type === 'withdraw'} > <img src={arrowupimg} alt='Saída'/> <span>Saída</span> </RadioBox>

                </TransactiontypeContainer>

                <input placeholder='Categoria'/>

                <button type='submit'>
                    Cadastrar
                </button>

            </Container>        
        </Modal>
    );
}