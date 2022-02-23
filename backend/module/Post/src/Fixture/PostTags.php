<?php

namespace Post\Fixture;

use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Entities\Posts\Model\Tags;

class PostTags implements FixtureInterface
{
    private $data = array(
        0 => array(
            'description' => 'NSFW',
        ),
        1 => array(
            'description' => 'Games',
        ),
        2 => array(
            'description' => 'Humor',
        ),
        3 => array(
            'description' => 'Diversos',
        ),
        4 => array(
            'description' => 'Esportes',
        ),
        5 => array(
            'description' => 'Notícias',
        ),
        6 => array(
            'description' => 'Natureza',
        ),
    );

    public function load(ObjectManager $manager)
    {
        foreach ($this->data as $d) {
            $tag = new Tags;
            $tag->setDescricao($d['description']);
            $manager->persist($tag);
        }
        $manager->flush();
    }
}