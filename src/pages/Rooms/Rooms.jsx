import React, { useEffect, useState } from 'react';
import styles from './Rooms.module.css';
import RoomCard from '../../components/RoomCard/RoomCard';
import AddRoomModal from '../../components/AddRoomModal/AddRoomModal';
import { getAllRooms } from '../../http';
import PrivateModal from '../../components/PrivateModel/PrivateModal';

const Rooms = () => {

    const [showModal, setShowModal] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [privateModal, setPrivateModal] = useState(false);

    useEffect(() => {
        const fetchRooms = async () => {
            const {data} = await getAllRooms();
            setRooms(data);
        }
        fetchRooms();
    }, []);

    function openModal() {
        setShowModal(true);
    }

    function openPrivateModal() {
        setPrivateModal(true);
    }

    return <>
        <div className="container">
            <div className={styles.roomsHeader}>
                <div className={styles.left}>
                    <span className={styles.heading}>All Voice Rooms</span>
                </div>
                <div className={styles.roomButtons}>
                    <div className={styles.right}>
                        <button onClick={openModal} className={styles.startRoomButton}>
                            <img src="/images/add-room-icon.png" alt="add-room"></img>
                            <span> Start New Room</span>
                        </button>
                    </div>
                    <div className={styles.right}>
                        <button onClick={openPrivateModal} className={styles.privateRoomButton}>
                            <span> Join Private Room</span>
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className={styles.roomList}>
                {rooms.map((room) => (            
                    <RoomCard key={room.id} room={room}/>              
                ))}
            </div>
        </div>
        {showModal && <AddRoomModal onClose={() => setShowModal(false)}/>}
        {privateModal && <PrivateModal onClose={() => setPrivateModal(false)}/>}
    </>
};

export default Rooms;
