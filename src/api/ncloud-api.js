import json from "../resources/prompt.json";

export async function generate(select, input, textarea) {
  await get_prompt(select);

  // TODO API
  return "";
}

async function get_prompt(select) {
  console.log(json[select]);
  return "";
}
