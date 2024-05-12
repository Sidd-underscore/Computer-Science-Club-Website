"use server";

import fetch from "node-fetch";

export async function submitEmail(email) {
  var params = {
    content:
      "Alright <@&756032811802034245> <@&756033783874191380> new member would like to join, email being " +
      email + " wow very cool",
  };

  if (email.endsWith("@student.pps.net") || email.endsWith("@pps.net")) {
    await fetch(process.env.WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    });
    return { error: false };
  } else {
    return { error: true };
  }
}
