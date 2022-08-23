# corfu

Typesafe HTML templates using JSX 🚀🛡️🔥

# Get Started

Specify `h` as the JSX pragma and import it from `mod.ts`. Then construct JSX as
if it was HTML.

```typescript
/* @jsx h */
import { h } from "http://deno.land/x/corfu/mod.ts";

const html: string = <div class="message">Hello world</div>;
```

Your JSX is synchronously converted to a string without any intermediate
representation like `JSX.Element`

# Templates

In react and co, a function that returns `JSX.Element` is called a `Component`.
In corfu, a function that returns `string` is called a `Template`, to reduce
confusion. You can use the `PropsWithChildren` interface to create Templates
that accept children.

```typescript
/* @jsx h */
import { h, PropsWithChildren } from "http://deno.land/x/corfu/mod.ts";

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

// produces:

<div class="user">
  <span class="name">Alexandros</span>
  <span class="email">alexandros@gmail.com</span>
  <div>a child</div>
</div>
```

# Hooks?

Since templates do not re-render, they don't need to express behavior or state that changes
over time. For now, the only thing resembling a hook is the `withData` and `useData` helpers
that help alleviate the pain of prop drilling:

```typescript
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

const data = {
  user: {
    name: "Alexandros",
    email: "alexandros@gmail.com",
  },
};

// the generic type here is optional
const rendered = withData<Data>(data, () => {
  return (
    <div>
      <h1>User Profile</h1>
      <User />
    </div>
  );
});
```
