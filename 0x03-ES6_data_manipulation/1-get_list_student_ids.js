export default function getListStudentIds(studentIds) {
  if (!Array.isArray(studentIds)) {
    return [];
  }
  const getIds = (studentIds) => studentIds.id;
  const ids = studentIds.map(getIds);
  return ids;
}
