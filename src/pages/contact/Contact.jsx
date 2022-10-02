import React from "react";
import { Button, Container, Form } from "react-bootstrap";
function Contact() {
  return (
    <div className="mt-5">
      <Container className="pt-5 d-flex ">
        <div className="" style={{ flex: "1" }}>
          <h1 className="mb-4">Map</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3371992519114!2d100.61596951474904!3d13.758527590343066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f8333d048c3%3A0xd458d46a29f466ba!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lij4Liy4Lih4LiE4Liz4LmB4Lir4LiH!5e0!3m2!1sth!2sth!4v1661665666314!5m2!1sth!2sth"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="" style={{ flex: "1" }}>
          <h1 className="mb-4">Location</h1>
          <ul>
            <li>ชื่อบริษัท loeen</li>
            <li>เบอร์ 08-1234-4567</li>
            <li>
              ที่อยู่ Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Non, quaerat. Rem odit molestias facere. Reprehenderit deserunt
              tempore unde ipsam accusantium velit a nemo totam laboriosam, aut
              sapiente odio doloremque tempora!
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
