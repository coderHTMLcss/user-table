import { FilterState } from "../store/slices/filterSlice";
import { User } from "../store/slices/usersSlice";

const updatePhoneNumber = (phone: string) => phone.replace(/\D/g, "");
export default function filterUsersData(users: User[], filter: FilterState) {
  const filteredData = users.filter(
    (user) =>
      (!filter.name ||
        user.name.toLowerCase().includes(filter.name.toLowerCase())) &&
      (!filter.username ||
        user.username.toLowerCase().includes(filter.username.toLowerCase())) &&
      (!filter.email ||
        user.email.toLowerCase().includes(filter.email.toLowerCase())) &&
      (!filter.phone ||
        updatePhoneNumber(user.phone).includes(updatePhoneNumber(filter.phone)))
  );

  return filteredData;
}
