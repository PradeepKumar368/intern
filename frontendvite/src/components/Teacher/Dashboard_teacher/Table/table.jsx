import { Table } from 'flowbite-react';

function CourseTable() {
  return (
    <div className="overflow-x-auto">
      <Table hoverable className="w-full">
        <Table.Head>
          <Table.HeadCell className="text-left">Course Name</Table.HeadCell>
          <Table.HeadCell className="text-left">Category</Table.HeadCell>
          <Table.HeadCell className="text-left">Students Enrolled</Table.HeadCell>
          <Table.HeadCell className="text-left">Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Mathematics 101</Table.Cell>
            <Table.Cell className="whitespace-nowrap">Mathematics</Table.Cell>
            <Table.Cell className="whitespace-nowrap">50</Table.Cell>
            <Table.Cell className="whitespace-nowrap">
              <button className="text-blue-500 hover:text-blue-700">Edit</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Science Lab</Table.Cell>
            <Table.Cell className="whitespace-nowrap">Science</Table.Cell>
            <Table.Cell className="whitespace-nowrap">30</Table.Cell>
            <Table.Cell className="whitespace-nowrap">
              <button className="text-blue-500 hover:text-blue-700">Edit</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Literature Workshop</Table.Cell>
            <Table.Cell className="whitespace-nowrap">Literature</Table.Cell>
            <Table.Cell className="whitespace-nowrap">20</Table.Cell>
            <Table.Cell className="whitespace-nowrap">
              <button className="text-blue-500 hover:text-blue-700">Edit</button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default CourseTable;
