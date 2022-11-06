import { AppMentionEvent } from "@slack/bolt";
import { CommandInterface } from "./commandInterface";
import { SelfIntroduceCommand } from "./selfIntroduceCommand";

/**
 * @export
 * @class CommandFactory
 */
export class CommandFactory {
  /**
   * @static
   * @param {AppMentionEvent} event
   * @return {*}  {(CommandInterface | null)}
   * @memberof CommandFactory
   */
  public static make(event: AppMentionEvent): CommandInterface | null {
    let matchedGroups: {[key: string]: string} | undefined;

    matchedGroups = event.text.match(/(?<selfIntroduce>自己紹介)/)?.groups;
    if (matchedGroups?.selfIntroduce) {
      return new SelfIntroduceCommand(event);
    }

    matchedGroups = event.text.match(/(?<help>help|ヘルプ)/)?.groups;
    if (matchedGroups?.help) {
      // return new ShowHelpMessageCommand();
    }

    return null;
  }
}
