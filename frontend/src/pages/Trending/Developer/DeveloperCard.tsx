import * as ApiDto from "api/ApiDto";
import React from "react";
import { createUseStyles } from "react-jss";
import { Avatar, Button, Link, Typography } from "ui-kit";
import { BookIcon, FavoriteIcon, PopularIcon } from "ui-kit/icons";

const useStyles = createUseStyles((theme) => ({
  root: {
    overflow: "hidden",
    display: "flex",
  },
  actions: {
    flex: "0 0 auto",
    width: "30%",
    textAlign: "right",
  },
  descriptionColumn: {
    flex: "1 1 0",
  },
  buttons: {
    flex: "0 0 auto",
    width: "30%",
    display: "inline-flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    "&>*:not(:last-child)": {
      marginInlineEnd: theme.space(),
    },
  },
  indexWrap: {
    width: theme.space(2),
    flex: "0 0 auto",
  },
  index: {
    fontSize: 12,
  },
}));

type DeveloperCardProps = {
  developer: ApiDto.Developer;
  index: number;
};
export const DeveloperCard: React.VFC<DeveloperCardProps> = ({
  developer,
  index,
}) => {
  const classes = useStyles();

  const renderDescription = () => {
    return (
      <div className={classes.descriptionColumn}>
        {developer.repository ? (
          <RepositoryInfo repo={developer.repository} />
        ) : (
          <></>
        )}
      </div>
    );
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.indexWrap}>
          <Typography className={classes.index} color="secondary">
            {index}
          </Typography>
        </div>
        <DeveloperInfo developer={developer} />
        {renderDescription()}
        <div className={classes.buttons}>
          <Button icon={<FavoriteIcon color="favorite" />}>Sponsor</Button>
          <Button>Follow</Button>
        </div>
      </div>
    </>
  );
};

const useInfoStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    flex: "1 1 0",
  },
  avatarWrap: {
    paddingInline: theme.space(2),
  },
  username: {
    fontSize: 20,
  },
}));

const DeveloperInfo: React.VFC<{ developer: ApiDto.Developer }> = ({
  developer,
}) => {
  const classes = useInfoStyles();

  const displayName = developer.name || developer.username;

  return (
    <div className={classes.root}>
      <div className={classes.avatarWrap}>
        <Avatar size={48} src={developer.avatar} alt={displayName}></Avatar>
      </div>
      <div>
        <Link className={classes.username} href="#">
          {displayName}
        </Link>
        {developer.name && (
          <Typography color="secondary">{developer.username}</Typography>
        )}
      </div>
    </div>
  );
};

const useRepositoryStyles = createUseStyles((theme) => ({
  root: {},
  title: {
    fontSize: 16,
    display: "flex",
    alignItems: "flex-end",
    marginBlockEnd: theme.space(0.5),
  },
  titleIcon: {
    marginRight: theme.space(0.5),
    verticalAlign: "text-bottom",
  },
  titleLink: {
    lineHeight: 1.25,
    fontWeight: 500,
  },
  description: {
    marginBlock: theme.space(),
    fontSize: 12,
  },
  popular: {
    display: "flex",
    textTransform: "uppercase",
    fontSize: 12,
    marginBlockEnd: theme.space(0.5),
  },
  popularIcon: {
    marginInlineEnd: theme.space(0.5),
  },
}));
const RepositoryInfo: React.VFC<{ repo: ApiDto.RepositoryBasic }> = ({
  repo,
}) => {
  const classes = useRepositoryStyles();

  return (
    <div>
      <Typography color="secondary" className={classes.popular}>
        <PopularIcon className={classes.popularIcon} color="popular" />
        popular repo
      </Typography>
      <div className={classes.title}>
        <Link href={repo.url} className={classes.titleLink}>
          <BookIcon color="secondary" className={classes.titleIcon} />
          {repo.name}
        </Link>
      </div>
      <Typography className={classes.description} color="secondary">
        {repo.description}
      </Typography>
    </div>
  );
};
