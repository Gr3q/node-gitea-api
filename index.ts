/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { GiteaApi } from './GiteaApi';

export { ApiError } from './core/ApiError';
export { BaseHttpRequest } from './core/BaseHttpRequest';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { AccessToken } from './models/AccessToken';
export type { Activity } from './models/Activity';
export type { ActivityPub } from './models/ActivityPub';
export type { AddCollaboratorOption } from './models/AddCollaboratorOption';
export type { AddTimeOption } from './models/AddTimeOption';
export type { AnnotatedTag } from './models/AnnotatedTag';
export type { AnnotatedTagObject } from './models/AnnotatedTagObject';
export type { APIError } from './models/APIError';
export type { Attachment } from './models/Attachment';
export type { Branch } from './models/Branch';
export type { BranchProtection } from './models/BranchProtection';
export type { ChangedFile } from './models/ChangedFile';
export { ChangeFileOperation } from './models/ChangeFileOperation';
export type { ChangeFilesOptions } from './models/ChangeFilesOptions';
export type { CombinedStatus } from './models/CombinedStatus';
export type { Comment } from './models/Comment';
export type { Commit } from './models/Commit';
export type { CommitAffectedFiles } from './models/CommitAffectedFiles';
export type { CommitDateOptions } from './models/CommitDateOptions';
export type { CommitMeta } from './models/CommitMeta';
export type { CommitStats } from './models/CommitStats';
export type { CommitStatus } from './models/CommitStatus';
export type { CommitStatusState } from './models/CommitStatusState';
export type { CommitUser } from './models/CommitUser';
export type { ContentsResponse } from './models/ContentsResponse';
export type { CreateAccessTokenOption } from './models/CreateAccessTokenOption';
export type { CreateBranchProtectionOption } from './models/CreateBranchProtectionOption';
export type { CreateBranchRepoOption } from './models/CreateBranchRepoOption';
export type { CreateEmailOption } from './models/CreateEmailOption';
export type { CreateFileOptions } from './models/CreateFileOptions';
export type { CreateForkOption } from './models/CreateForkOption';
export type { CreateGPGKeyOption } from './models/CreateGPGKeyOption';
export { CreateHookOption } from './models/CreateHookOption';
export type { CreateHookOptionConfig } from './models/CreateHookOptionConfig';
export type { CreateIssueCommentOption } from './models/CreateIssueCommentOption';
export type { CreateIssueOption } from './models/CreateIssueOption';
export type { CreateKeyOption } from './models/CreateKeyOption';
export type { CreateLabelOption } from './models/CreateLabelOption';
export { CreateMilestoneOption } from './models/CreateMilestoneOption';
export type { CreateOAuth2ApplicationOptions } from './models/CreateOAuth2ApplicationOptions';
export { CreateOrgOption } from './models/CreateOrgOption';
export type { CreatePullRequestOption } from './models/CreatePullRequestOption';
export type { CreatePullReviewComment } from './models/CreatePullReviewComment';
export type { CreatePullReviewOptions } from './models/CreatePullReviewOptions';
export type { CreatePushMirrorOption } from './models/CreatePushMirrorOption';
export type { CreateReleaseOption } from './models/CreateReleaseOption';
export { CreateRepoOption } from './models/CreateRepoOption';
export type { CreateStatusOption } from './models/CreateStatusOption';
export type { CreateTagOption } from './models/CreateTagOption';
export { CreateTeamOption } from './models/CreateTeamOption';
export type { CreateUserOption } from './models/CreateUserOption';
export type { CreateWikiPageOptions } from './models/CreateWikiPageOptions';
export type { Cron } from './models/Cron';
export type { DeleteEmailOption } from './models/DeleteEmailOption';
export type { DeleteFileOptions } from './models/DeleteFileOptions';
export type { DeployKey } from './models/DeployKey';
export type { DismissPullReviewOptions } from './models/DismissPullReviewOptions';
export type { EditAttachmentOptions } from './models/EditAttachmentOptions';
export type { EditBranchProtectionOption } from './models/EditBranchProtectionOption';
export type { EditDeadlineOption } from './models/EditDeadlineOption';
export type { EditGitHookOption } from './models/EditGitHookOption';
export type { EditHookOption } from './models/EditHookOption';
export type { EditIssueCommentOption } from './models/EditIssueCommentOption';
export type { EditIssueOption } from './models/EditIssueOption';
export type { EditLabelOption } from './models/EditLabelOption';
export type { EditMilestoneOption } from './models/EditMilestoneOption';
export { EditOrgOption } from './models/EditOrgOption';
export type { EditPullRequestOption } from './models/EditPullRequestOption';
export type { EditReactionOption } from './models/EditReactionOption';
export type { EditReleaseOption } from './models/EditReleaseOption';
export type { EditRepoOption } from './models/EditRepoOption';
export { EditTeamOption } from './models/EditTeamOption';
export type { EditUserOption } from './models/EditUserOption';
export type { Email } from './models/Email';
export type { ExternalTracker } from './models/ExternalTracker';
export type { ExternalWiki } from './models/ExternalWiki';
export type { FileCommitResponse } from './models/FileCommitResponse';
export type { FileDeleteResponse } from './models/FileDeleteResponse';
export type { FileLinksResponse } from './models/FileLinksResponse';
export type { FileResponse } from './models/FileResponse';
export type { FilesResponse } from './models/FilesResponse';
export type { GeneralAPISettings } from './models/GeneralAPISettings';
export type { GeneralAttachmentSettings } from './models/GeneralAttachmentSettings';
export type { GeneralRepoSettings } from './models/GeneralRepoSettings';
export type { GeneralUISettings } from './models/GeneralUISettings';
export type { GenerateRepoOption } from './models/GenerateRepoOption';
export type { GitBlobResponse } from './models/GitBlobResponse';
export type { GitEntry } from './models/GitEntry';
export type { GitHook } from './models/GitHook';
export type { GitignoreTemplateInfo } from './models/GitignoreTemplateInfo';
export type { GitObject } from './models/GitObject';
export type { GitTreeResponse } from './models/GitTreeResponse';
export type { GPGKey } from './models/GPGKey';
export type { GPGKeyEmail } from './models/GPGKeyEmail';
export type { Hook } from './models/Hook';
export type { Identity } from './models/Identity';
export type { InternalTracker } from './models/InternalTracker';
export type { Issue } from './models/Issue';
export type { IssueConfig } from './models/IssueConfig';
export type { IssueConfigContactLink } from './models/IssueConfigContactLink';
export type { IssueConfigValidation } from './models/IssueConfigValidation';
export type { IssueDeadline } from './models/IssueDeadline';
export type { IssueFormField } from './models/IssueFormField';
export type { IssueFormFieldType } from './models/IssueFormFieldType';
export type { IssueLabelsOption } from './models/IssueLabelsOption';
export type { IssueMeta } from './models/IssueMeta';
export type { IssueTemplate } from './models/IssueTemplate';
export type { IssueTemplateLabels } from './models/IssueTemplateLabels';
export type { Label } from './models/Label';
export type { LabelTemplate } from './models/LabelTemplate';
export type { LicensesTemplateListEntry } from './models/LicensesTemplateListEntry';
export type { LicenseTemplateInfo } from './models/LicenseTemplateInfo';
export type { MarkdownOption } from './models/MarkdownOption';
export type { MarkupOption } from './models/MarkupOption';
export { MergePullRequestOption } from './models/MergePullRequestOption';
export { MigrateRepoOptions } from './models/MigrateRepoOptions';
export type { Milestone } from './models/Milestone';
export type { NewIssuePinsAllowed } from './models/NewIssuePinsAllowed';
export type { NodeInfo } from './models/NodeInfo';
export type { NodeInfoServices } from './models/NodeInfoServices';
export type { NodeInfoSoftware } from './models/NodeInfoSoftware';
export type { NodeInfoUsage } from './models/NodeInfoUsage';
export type { NodeInfoUsageUsers } from './models/NodeInfoUsageUsers';
export type { Note } from './models/Note';
export type { NotificationCount } from './models/NotificationCount';
export type { NotificationSubject } from './models/NotificationSubject';
export type { NotificationThread } from './models/NotificationThread';
export type { NotifySubjectType } from './models/NotifySubjectType';
export type { OAuth2Application } from './models/OAuth2Application';
export type { Organization } from './models/Organization';
export type { OrganizationPermissions } from './models/OrganizationPermissions';
export type { Package } from './models/Package';
export type { PackageFile } from './models/PackageFile';
export type { PayloadCommit } from './models/PayloadCommit';
export type { PayloadCommitVerification } from './models/PayloadCommitVerification';
export type { PayloadUser } from './models/PayloadUser';
export type { Permission } from './models/Permission';
export type { PRBranchInfo } from './models/PRBranchInfo';
export type { PublicKey } from './models/PublicKey';
export type { PullRequest } from './models/PullRequest';
export type { PullRequestMeta } from './models/PullRequestMeta';
export type { PullReview } from './models/PullReview';
export type { PullReviewComment } from './models/PullReviewComment';
export type { PullReviewRequestOptions } from './models/PullReviewRequestOptions';
export type { PushMirror } from './models/PushMirror';
export type { Reaction } from './models/Reaction';
export type { Reference } from './models/Reference';
export type { Release } from './models/Release';
export type { RenameUserOption } from './models/RenameUserOption';
export type { RepoCollaboratorPermission } from './models/RepoCollaboratorPermission';
export type { RepoCommit } from './models/RepoCommit';
export type { Repository } from './models/Repository';
export type { RepositoryMeta } from './models/RepositoryMeta';
export type { RepoTopicOptions } from './models/RepoTopicOptions';
export type { RepoTransfer } from './models/RepoTransfer';
export type { ReviewStateType } from './models/ReviewStateType';
export type { SearchResults } from './models/SearchResults';
export type { ServerVersion } from './models/ServerVersion';
export type { StateType } from './models/StateType';
export type { StopWatch } from './models/StopWatch';
export type { SubmitPullReviewOptions } from './models/SubmitPullReviewOptions';
export type { Tag } from './models/Tag';
export { Team } from './models/Team';
export type { TimelineComment } from './models/TimelineComment';
export type { TimeStamp } from './models/TimeStamp';
export type { TopicName } from './models/TopicName';
export type { TopicResponse } from './models/TopicResponse';
export type { TrackedTime } from './models/TrackedTime';
export type { TransferRepoOption } from './models/TransferRepoOption';
export type { UpdateFileOptions } from './models/UpdateFileOptions';
export type { User } from './models/User';
export type { UserHeatmapData } from './models/UserHeatmapData';
export type { UserSettings } from './models/UserSettings';
export type { UserSettingsOptions } from './models/UserSettingsOptions';
export type { WatchInfo } from './models/WatchInfo';
export type { WikiCommit } from './models/WikiCommit';
export type { WikiCommitList } from './models/WikiCommitList';
export type { WikiPage } from './models/WikiPage';
export type { WikiPageMetaData } from './models/WikiPageMetaData';

export { ActivitypubService } from './services/ActivitypubService';
export { AdminService } from './services/AdminService';
export { IssueService } from './services/IssueService';
export { MiscellaneousService } from './services/MiscellaneousService';
export { NotificationService } from './services/NotificationService';
export { OrganizationService } from './services/OrganizationService';
export { PackageService } from './services/PackageService';
export { RepositoryService } from './services/RepositoryService';
export { SettingsService } from './services/SettingsService';
export { UserService } from './services/UserService';
