import { SquirrelFortuneRanking } from "@shiiyan/sukkirisu-function-core-domain";
import { PersonalSquirrelFortuneDto } from "./personalSquirrelFortune/personalSquirrelFortuneDto";
import { UseCaseType } from "./useCaseType";

export type AppMentionQueryResult = SquirrelFortuneRanking
    | PersonalSquirrelFortuneDto[]
    | undefined;

export interface AppMentionQueryUseCaseInterface {
    metaInfo: {
        type: UseCaseType;
        description: {
            english: string;
            japanese: string;
        };
        message: {
            success: string;
            failure: string;
        };
    };
    run(): Promise<AppMentionQueryResult>;
}
