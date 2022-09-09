import { toast } from 'react-toastify';
import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import './styles.css';
import {BASE_URL} from "../../utils/request";

type Props = {
    saleId: number;
}

function NotificationButton({saleId}: Props) {

    function handleClick(saleId: number) {
        axios(`${BASE_URL}/sales/${saleId}/notification`)
            .then(response => {
                toast.info("SMS enviado com sucesso");
            })
    }

    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="notificar"/>
        </div>
    )
}

export default NotificationButton