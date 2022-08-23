/* @jsx h */
import { expect } from "chai";
import { h, useData, withData } from "../mod.ts";

interface User {
  name: string;
  email: string;
}

interface Data {
  user: User;
}

function User(): string {
  const { user } = useData<Data>();
  return <div class="user-wrapper">{user.name} / {user.email}</div>;
}

function IsNull(): string {
  const data = useData<unknown>();
  return <div>{data === null ? "null" : "notnull"}</div>;
}

Deno.test("useData() returns null when called outside of withData", () => {
  const r1 = withData({}, () => <IsNull />);
  const r2 = <IsNull />;
  const r3 = withData("hello", () => <IsNull />);

  expect(r1).to.equal("<div>notnull</div>");
  expect(r2).to.equal("<div>null</div>");
  expect(r3).to.equal("<div>notnull</div>");
});

Deno.test("useData() returns data when used inside of withData()", () => {
  const data = {
    user: {
      name: "Alexandros",
      email: "alexandros@gmail.com",
    },
  };
  const rendered = withData(data, () => {
    return (
      <div>
        <h1>User Profile</h1>
        <User />
      </div>
    );
  });

  expect(rendered).to.include("Alexandros / alexandros@gmail.com");
});
