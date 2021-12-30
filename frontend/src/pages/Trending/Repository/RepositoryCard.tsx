import * as ApiDto from "api/ApiDto";
import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";
import { Avatar, Button, Link, Typography } from "ui-kit";
import {
  BookIcon,
  FavoriteIcon,
  ForkIcon,
  IconProps,
  StarIcon,
} from "ui-kit/icons";

const useStyles = createUseStyles((theme) => ({
  root: {
    overflow: "hidden",
    display: "flex",
  },
  startContent: {
    flex: "1 1 auto",
  },
  endContent: {
    flex: "0 0 auto",
    paddingInlineStart: theme.space(2),
  },
  title: {
    fontSize: 20,
    display: "flex",
    alignItems: "center",
  },
  titleIcon: {
    marginInlineEnd: theme.space(1),
  },
  description: {
    marginBlock: theme.space(),
  },
  titleLink: {},
  bottomContent: {
    display: "flex",
    marginBlockStart: theme.space(),
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    "&>*:not(:last-child)": {
      marginInlineEnd: theme.space(),
    },
  },
  badges: {
    display: "flex",
    "&>*:not(:last-child)": {
      marginInlineEnd: theme.space(2),
    },
  },
  avatars: {
    display: "flex",
    alignItems: "center",
    "&>*:not(:last-child)": {
      marginInlineEnd: theme.space(0.5),
    },
  },
  avatarsLabel: {
    fontSize: 12,
  },
}));

type RepositoryCardProps = {
  repository: ApiDto.Repository;
};
export const RepositoryCard: React.VFC<RepositoryCardProps> = ({
  repository,
}) => {
  const classes = useStyles();

  const renderContributors = () => {
    if (repository.builtby.length === 0) {
      return null;
    }
    return (
      <div className={classes.avatars}>
        <Typography className={classes.avatarsLabel} color="secondary">
          Built by
        </Typography>
        {repository.builtby.map((contrib) => (
          <Avatar
            key={contrib.username}
            src={contrib.avatar}
            alt={contrib.username}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.startContent}>
          <div className={classes.title}>
            <BookIcon color="secondary" className={classes.titleIcon} />
            <Link href="#" className={classes.titleLink}>
              {repository.author} / <strong>{repository.name}</strong>
            </Link>
          </div>
          <Typography className={classes.description} color="secondary">
            {repository.description}
          </Typography>
        </div>
        <div className={classes.endContent}>
          <div className={classes.buttons}>
            <Button icon={<FavoriteIcon color="favorite" />}>Sponsor</Button>
            <Button icon={<StarIcon />}>Star</Button>
          </div>
        </div>
      </div>
      <div className={classes.bottomContent}>
        <div className={classes.badges}>
          <Badge content={repository.language} />
          <Badge icon={<StarIcon />} content={repository.stars} />
          <Badge icon={<ForkIcon />} content={repository.forks} />
          {renderContributors()}
        </div>
        <Badge
          icon={<StarIcon />}
          content={<span>{repository.laststars} stars today</span>}
        />
      </div>
    </>
  );
};

const useBadgeStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    fontSize: 12,
  },
  contentWithIcon: {
    marginInlineStart: theme.space(0.5),
  },
}));

type BadgeProps = {
  icon?: React.ReactElement<IconProps>;
  content: React.ReactNode;
};
const Badge: React.VFC<BadgeProps> = ({ content, icon }) => {
  const classes = useBadgeStyles();
  return (
    <div className={classes.root}>
      {icon && React.cloneElement(icon, { color: "secondary" })}
      <Typography
        className={clsx(icon && classes.contentWithIcon)}
        color="secondary"
      >
        {content}
      </Typography>
    </div>
  );
};
