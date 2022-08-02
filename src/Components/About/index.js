import React from 'react';

const About = (props) => {
  return (
    <div class="about">
        <div class="model-about">
            <h3>Thank You for answering the Questions</h3>
            <table>
                <tr>
                    <th>Sections</th>
                    <th>Rating</th>

                </tr>
                {props.section && Object.keys(props.section).map((item) => {
                    return(
                        <tr>
                            <td>{item}</td>
                            <td>{props.section[item] && props.section[item].reduce((a,b)=> +a + +b,0)/props.section[item].length}</td>
                        </tr>
                    )
                })}
            </table>
            <button class="about-close" onClick={props.aboutResultClose}>Close</button>
        </div>
    </div>
  );
}

export default About;
