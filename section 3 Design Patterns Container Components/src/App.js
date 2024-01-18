import { BookInfo } from "./components/book-info";
import { CurrentUserLoader } from "./components/current-user-loader";
import { ResourceLoader } from "./components/resource-loader";
import { UserInfo } from "./components/user-info";
import { UserLoader } from "./components/user-loader";

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userId={"2"}>
        <UserInfo />
      </UserLoader>

      <ResourceLoader resourceUrl={"/users/3"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl={"/books/1"} resourceName={"book"}>
        <BookInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
