import { should } from "chai";
import { PersonalSquirrelFortuneDto } from "../useCase/personalSquirrelFortune/personalSquirrelFortuneDto";
should();

describe("PersonalSquirrelFortuneRankingSlackMessageBuilder", () => {
  it("should render correct slack message given PersonlSquirrelFortunes", () => {
    const personalSquirrelFortunes = createPersonalFortunes();
    const slackMessageBuilder = new PersonalSquirrelFortuneRankingSlackMessageBuilder(personalSquirrelFortunes);
    const message = slackMessageBuilder.build();

    const expected = createExpectedMessage();
    message.should.deep.equal(expected);
  });
});

const createPersonalFortunes = (): PersonalSquirrelFortuneDto[] => {
  return [
    {
      birthMonth: 1,
      name: "abc",
      rank: 1,
      comment: "日焼け対策をして肌トラブルを防ごう",
    },
    {
      birthMonth: 2,
      name: "bbb",
      rank: 2,
      comment: "日焼け対策をして肌トラブルを防ごう",
    },
    {
      birthMonth: 3,
      name: "ccc",
      rank: 3,
      comment: "日焼け対策をして肌トラブルを防ごう",
    },
    {
      birthMonth: 1,
      name: "333",
      rank: 1,
      comment: "日焼け対策をして肌トラブルを防ごう",
    },
    {
      birthMonth: 1,
      name: "uuu",
      rank: 1,
      comment: "日焼け対策をして肌トラブルを防ごう",
    },
  ];
};

const createExpectedMessage = () => {
  return {
    "blocks": [
      {
        "type": "header",
        "text": {
          "emoji": true,
          "text": "2022年8月4日の個人スッキリすランキング:chipmunk:",
          "type": "plain_text",
        },
      },
      {
        "type": "divider",
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*1位* abc,333,uuu 日焼け対策をして肌トラブルを防ごう",
        },
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*2位* bbb 日焼け対策をして肌トラブルを防ごう",
        },
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*3位* ccc 日焼け対策をして肌トラブルを防ごう",
        },
      },
      {
        "type": "divider",
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "ソース： <https://www.ntv.co.jp/sukkiri/sukkirisu/index.html|誕生月占い スッキりす!>",
        },
      },
    ],
  };
};
