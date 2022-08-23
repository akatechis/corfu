/* @jsx h */
import { h, PropsWithChildren } from "../mod.ts";
import { expect } from "chai";

Deno.test('Get Started code block compiles', () => {
  const html: string = <div class="message">Hello world</div>;
  expect(html).to.equal('<div class="message">Hello world</div>');
});

Deno.test("Templates code block compiles", () => {
  interface UserData {
    name: string;
    email: string;
  }
  
  function UserInfo(props: PropsWithChildren<UserData>): string {
    return (
      <div class="user">
        <span class="name">{ props.name }</span>
        <span class="email">{ props.email }</span>
        { props.children }
      </div>
    );
  }
  
  const html = (
    <UserInfo name="Alexandros" email="alexandros@gmail.com">
      <div>a child</div>
    </UserInfo>
  );  

  expect(html).to.include('<span class="name">Alexandros</span>');
  expect(html).to.include('<span class="email">alexandros@gmail.com</span>');
  expect(html).to.include('<div>a child</div>');
});
