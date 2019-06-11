import React from "react";
import { Button } from "devextreme-react";
import notify from "devextreme/ui/notify";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Config from DevExtreme</h3>
        <Button
          key={"xxxxx"}
          width={140}
          text={"Search"}
          icon={"find"}
          type={"default"}
          stylingMode={"outlined"}
        />
        <Button
          key={"xxxeeex"}
          width={140}
          text={"Execute"}
          icon={"video"}
          type={"default"}
          stylingMode={"outlined"}
        />

        <Button
          key={"xxxeeex"}
          width={140}
          text={"ACTP"}
          icon={"check"}
          type={"default"}
          stylingMode={"outlined"}
        />

        <Button
          key={"xxxeeex"}
          width={140}
          text={"Add Item"}
          icon={"add"}
          type={"default"}
          stylingMode={"outlined"}
        />

        <br />

        <Button
          width={140}
          text={"Save"}
          type={"success"}
          stylingMode={"outlined"}
        />

        <Button
          width={140}
          text={"OK"}
          type={"success"}
          stylingMode={"outlined"}
        />

        <Button
          width={140}
          text={"Confirm"}
          type={"success"}
          stylingMode={"outlined"}
        />

        <br />

        <Button
          width={140}
          text={"Delete"}
          type={"danger"}
          stylingMode={"outlined"}
        />

        <Button
          width={140}
          text={"Cancel"}
          type={"danger"}
          stylingMode={"outlined"}
        />

        <br />
        <br />

        <h3>Custom Color</h3>
        <Button
          id={"myButton"}
          width={140}
          text={"Delete"}
          stylingMode={"outlined"}
        />

        <Button
          id={"myButton"}
          width={140}
          icon={"close"}
          text={"Delete"}
          // type={"danger"}
          stylingMode={"outlined"}
        />

        <Button
          id={"myButton"}
          width={140}
          icon={"check"}
          text={"Delete"}
          // type={"danger"}
          stylingMode={"outlined"}
        />
      </div>
    );
  }
}

export default App;
