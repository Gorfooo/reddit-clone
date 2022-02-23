<?php

include __DIR__ . '/bootstrap.php';
include __DIR__ . '/cli-config.php';

use Doctrine\Common\DataFixtures\Loader;
use Doctrine\Common\DataFixtures\Executor\ORMExecutor;
use Doctrine\Common\DataFixtures\Purger\ORMPurger;
use Application\Fixture\ReportReason as FixtureReportReason;
use Post\Fixture\PostTags as FixturePostTags;

$loader = new Loader();

$loader->addFixture(new FixtureReportReason);
$loader->addFixture(new FixturePostTags);

$purger = new ORMPurger();
$executor = new ORMExecutor($entityManager, $purger);
$executor->execute($loader->getFixtures(), false);