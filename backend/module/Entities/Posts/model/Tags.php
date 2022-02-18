<?php
namespace Reddit\Posts\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Tags")
*/
class Tags
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    private $id_tag;

    /**
    * @ORM\Column(type="string", length=30)
    *
    * @var string
    */
    private $descricao;

    /**
    * @ORM\ManyToMany(targetEntity="Reddit\Posts\Model\Post", inversedBy="id_tag")
    * @ORM\JoinTable(name="Post_Tags",
        * joinColumns={@ORM\JoinColumn(name="id_tag", referencedColumnName="id_tag")},
        * inverseJoinColumns={@ORM\JoinColumn(name="id_post", referencedColumnName="id_post")}
    * )
    */
    private $posts;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->posts = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get idTag.
     *
     * @return int
     */
    public function getIdTag()
    {
        return $this->id_tag;
    }

    /**
     * Set descricao.
     *
     * @param string $descricao
     *
     * @return Tags
     */
    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;

        return $this;
    }

    /**
     * Get descricao.
     *
     * @return string
     */
    public function getDescricao()
    {
        return $this->descricao;
    }

    /**
     * Add post.
     *
     * @param \Reddit\Posts\Model\Post $post
     *
     * @return Tags
     */
    public function addPost(\Reddit\Posts\Model\Post $post)
    {
        $this->posts[] = $post;

        return $this;
    }

    /**
     * Remove post.
     *
     * @param \Reddit\Posts\Model\Post $post
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removePost(\Reddit\Posts\Model\Post $post)
    {
        return $this->posts->removeElement($post);
    }

    /**
     * Get posts.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPosts()
    {
        return $this->posts;
    }
}
