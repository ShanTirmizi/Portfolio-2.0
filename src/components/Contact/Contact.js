import React from 'react';
import './Contact.css';

// export default class Contact extends React.Component {
//     constructor(props) {
//         super(props);
//         this.submitForm = this.submitForm.bind(this);
//         this.state = {
//           status: ""
//         };
//       }
    
//       render() {
//         const { status } = this.state;
//         return (
//         <div className='contact' id='NavContact'>
//             <from
//         onSubmit={this.submitForm}
//         action="https://formspree.io/f/mrgoddpy"
//         method="POST"
//                 className="contact__title">
//                 <h2>Get in touch</h2>
//                 <div className="contact__title__name">
//                     <label>Name</label>
//                     <input  type="text" name="name" type='text' placeholder='Name' />
//                 </div>
//                 <div className="contact__title__email">    
//                     <label>Email</label>
//                     <input  type="text" name="email" placeholder='Email' />
//                 </div>
//                 <div className="contact__title__message">
//                     <label>Message</label>
//                     <textarea type="text" name="message" placeholder='Message' />
//                 </div>
//                 {status === "SUCCESS" ? <p>Thanks!</p> : <button className='contact__title__button'>Submit</button>}
//                 {status === "ERROR" && <p>Ooops! There was an error.</p>}
//                 <button className='contact__title__button' type='submit'>Submit</button>
//             </from>
//         </div>
//     )
// }

// submitForm(ev) {
//     ev.preventDefault();
//     const form = ev.target;
//     const data = new FormData(form);
//     const xhr = new XMLHttpRequest();
//     xhr.open(form.method, form.action);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState !== XMLHttpRequest.DONE) return;
//       if (xhr.status === 200) {
//         form.reset();
//         this.setState({ status: "SUCCESS" });
//       } else {
//         this.setState({ status: "ERROR" });
//       }
//     };
//     xhr.send(data);
//   }
// }


// import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div className='contact' id='NavContact'>
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/mrgoddpy"
                method="POST"
                className="contact__title" >
                <h2>Get in touch</h2>
                <div className="contact__title__email">    
                    <label>Name</label>
                    <input type="text" name="name" placeholder='Name' />
                </div>
                <div className="contact__title__email">    
                    <label>Email:</label>
                    <input type="email" name="email" placeholder='Email' />
                </div>
                <div className="contact__title__message">
                    <label>Message:</label>
                    <textarea type="text" name="message" placeholder='Message' />
                </div>
                {status === "SUCCESS" ? <p>Thanks!</p> : <button  className='contact__title__button'>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}