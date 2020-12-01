import axios from 'axios';

export async function getOptions() {
  const res = await axios.get('/api/groups/');
  const groupNames = res.data;

  const options = groupNames.map((option) => ({
    label: option.groupName,
    value: option.groupName,
  }));

  return options;
}
