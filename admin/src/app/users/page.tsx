import { User, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<User[]> => {
  return [
    {
      id: "728ed52a",
      avatar: "/users/1.png",
      status: "active",
      fullname: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: "728ed52b",
      avatar: "/users/2.png",
      status: "active",
      fullname: "Sarah Williams",
      email: "sarah.w@gmail.com",
    },
    {
      id: "728ed52c",
      avatar: "/users/3.png",
      status: "inactive",
      fullname: "Michael Brown",
      email: "michael.brown@yahoo.com",
    },
    {
      id: "728ed52d",
      avatar: "/users/4.png",
      status: "active",
      fullname: "Emily Johnson",
      email: "emily.j@outlook.com",
    },
    {
      id: "728ed52e",
      avatar: "/users/5.png",
      status: "active",
      fullname: "David Anderson",
      email: "d.anderson@gmail.com",
    },
    {
      id: "728ed52f",
      avatar: "/users/6.png",
      status: "inactive",
      fullname: "Laura Smith",
      email: "laura.smith@gmail.com",
    },
    {
      id: "728ed52g",
      avatar: "/users/7.png",
      status: "active",
      fullname: "Chris Thompson",
      email: "chris.t@hotmail.com",
    },
    {
      id: "728ed52h",
      avatar: "/users/8.png",
      status: "active",
      fullname: "Olivia Martinez",
      email: "olivia.m@gmail.com",
    },
    {
      id: "728ed52i",
      avatar: "/users/9.png",
      status: "inactive",
      fullname: "Daniel Harris",
      email: "daniel.harris@gmail.com",
    },
    {
      id: "728ed52j",
      avatar: "/users/10.png",
      status: "active",
      fullname: "Sophia Lee",
      email: "sophia.lee@yahoo.com",
    },
    {
      id: "728ed52k",
      avatar: "/users/11.png",
      status: "active",
      fullname: "James Wilson",
      email: "james.wilson@gmail.com",
    },
    {
      id: "728ed52l",
      avatar: "/users/12.png",
      status: "inactive",
      fullname: "Isabella Clark",
      email: "isabella.c@outlook.com",
    },
    {
      id: "728ed52m",
      avatar: "/users/13.png",
      status: "active",
      fullname: "Ethan Walker",
      email: "ethan.walker@gmail.com",
    },
    {
      id: "728ed52n",
      avatar: "/users/14.png",
      status: "active",
      fullname: "Ava Scott",
      email: "ava.scott@hotmail.com",
    },
    {
      id: "728ed52o",
      avatar: "/users/15.png",
      status: "inactive",
      fullname: "Henry Lewis",
      email: "henry.lewis@gmail.com",
    },
    {
      id: "728ed52p",
      avatar: "/users/16.png",
      status: "active",
      fullname: "Mia Turner",
      email: "mia.turner@gmail.com",
    },
    {
      id: "728ed52q",
      avatar: "/users/17.png",
      status: "active",
      fullname: "Jack Carter",
      email: "jack.carter@gmail.com",
    },
    {
      id: "728ed52r",
      avatar: "/users/18.png",
      status: "inactive",
      fullname: "Grace Rodriguez",
      email: "grace.r@outlook.com",
    },
    {
      id: "728ed52s",
      avatar: "/users/19.png",
      status: "active",
      fullname: "Lucas Perez",
      email: "lucas.perez@gmail.com",
    },
    {
      id: "728ed52t",
      avatar: "/users/20.png",
      status: "active",
      fullname: "Ella Baker",
      email: "ella.baker@gmail.com",
    },
  ];
};

const UsersPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UsersPage;
