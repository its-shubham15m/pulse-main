import React, { useState, useEffect, useMemo } from "react";
import "./Advisior.css";
import member1 from "../../members/Anurag Banerjee (Medium).jpg";
import member2 from "../../members/Anuska Kar.jpg";
import member3 from "../../members/Saikat Dey.jpg";

const Advisior = () => {
  const membersArr = useMemo(
    () => [
      { id: 1, name: "Anurag Banerjee", image: member1, whatsappLink: "https://wa.me/8777013696" },
      { id: 2, name: "Anuska Kar", image: member2, whatsappLink: "https://wa.me/9874702562" },
      { id: 3, name: "Saikat Dey", image: member3, whatsappLink: "https://wa.me/9434959513" },
    ],
    []
  );

  const [startIndex, setStartIndex] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState([]);

  useEffect(() => {
    let interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === membersArr.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [membersArr]);

  useEffect(() => {
    const endIndex =
      startIndex + 5 < membersArr.length ? startIndex + 5 : membersArr.length;
    setVisibleMembers([
      ...membersArr.slice(startIndex, endIndex),
      ...(endIndex === membersArr.length
        ? membersArr.slice(0, 5 - (membersArr.length - startIndex))
        : []),
    ]);
  }, [startIndex, membersArr]);

  return (
    <div className="agenda section" id="agenda">
      <div className="agenda-content container">
        <div className="section-header">
          <div className="title">ADVISIORS</div>
        </div>
      <div className="members-container">
          <div className="members-wrapper">
            {visibleMembers.map((member) => (
              <div className="members-slide" key={member.id}>
                <img src={member.image} alt={member.name} />
                <p>{member.name}</p>
                <div className="cta-buttons">
                    <div className="tertiary-btn">
                        <a href={member.whatsappLink}>WhatsApp &gt;</a>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Advisior;
