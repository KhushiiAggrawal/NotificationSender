import React from 'react'
import {Link} from 'react-router-dom'

const NotifyAll = () => {
    const [loading, setLoading] = useState(false);
    const [notiMsg, setNotiMsg] = useState("");

    const notifyAll = async()=>{
        try { 
            setLoading(true); // if u implement loading thingie
            const { data } = await axios.post(`https://articmailserver.onrender.com/notifications/notify`, 
              { notiMsg }, 
              { 
                headers: { 
                  "Content-Type": "application/json", 
                }, 
                withCredentials: true, 
              } 
            ); 
            console.log(data.message);// your response from server 
          } catch (error) { 
            if (error.response.data) { 
              console.log(error.response.data.message); 
            } 
            setLoading(false); 
          }
    }
    return (
        <>
            <div className='wrapper'>
                <div className='content'>
                    <img src="/icon/Logo.png" alt="logo" className="logo" />
                    <h2>Send Notification</h2>
                    <div className="innerDiv">
                        <div className="inputdiv">
                            <p>Message</p>
                            <textarea rows="4"
                                type="text"
                                placeholder="Type your message here...."
                                required
                                value={notiMsg}
                                onChange={(e) => setNotiMsg(e.target.value)}
                            ></textarea>
                        </div>
                        <Link to="/" className="a">Notify one ?</Link>
                        <button onClick={notifyAll}>
                            Send Notification
                        </button>
                    </div>
                </div>
            </div>
            {loading ? <Spinner /> : null}
        </>
    )
}

export default NotifyAll
