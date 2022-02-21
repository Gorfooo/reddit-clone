<?php

namespace Application;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Setup;
use Doctrine\Common\Annotations\AnnotationRegistry;
use Doctrine\ORM\Mapping\Driver\AnnotationDriver;
use Doctrine\Common\Annotations\AnnotationReader;

class SetEntityManager
{
    public function GetEntityManager(){
        $dbParams = array(
            'driver' => 'pdo_mysql',
            'user' => 'root',
            'password' => 'root',
            'dbname' => 'reddit_clone',
            );
    
        $paths = array(__DIR__ . '../../Entities');
    
        $isDevMode = false;
    
        $config = Setup::createConfiguration($isDevMode);
        $driver = new AnnotationDriver(new AnnotationReader(), $paths);
        $config->setMetadataDriverImpl($driver);
    
        AnnotationRegistry::registerFile(
            __DIR__ . '../../../../vendor/doctrine/orm/lib/Doctrine/ORM/Mapping/Driver/DoctrineAnnotations.php'
            );
            $entityManager = EntityManager::create($dbParams, $config);

        return $entityManager;
    }
}