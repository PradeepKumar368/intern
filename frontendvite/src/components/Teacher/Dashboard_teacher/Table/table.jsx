import { Table } from "flowbite-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseTable({ courses }) {
  return (
    <div className="overflow-x-auto">
      <Table hoverable className="w-full">
        <Table.Head>
          <Table.HeadCell className="text-left">Course Name</Table.HeadCell>
          <Table.HeadCell className="text-left">Category</Table.HeadCell>
          <Table.HeadCell className="text-left">Price</Table.HeadCell>
          <Table.HeadCell className="text-left">Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {courses.map((course, index) => (
            <Table.Row
              key={index}
              className={`bg-white dark:border-gray-700 dark:bg-gray-800 ${
                index % 2 === 0 ? "even" : "odd"
              }`}
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {course.title}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap">
                {course.category}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap">
                {course.price}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap">
                <Link
                  to={`/editcourse?courseId=${course.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

CourseTable.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseTable;
