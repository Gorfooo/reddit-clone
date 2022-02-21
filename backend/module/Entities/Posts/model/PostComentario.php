<?php
namespace Entities\Posts\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Post_Comentario")
*/
class PostComentario
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    private $id_comentario;

    /**
    * @ORM\ManyToOne(targetEntity="Post", inversedBy="id_comentario")
    * @ORM\JoinColumn(name="id_post", referencedColumnName="id_post", nullable=false)
    */
    private $id_post;

    /**
    * @ORM\ManyToOne(targetEntity="Entities\Usuario\model\Usuario", inversedBy="id_comentario")
    * @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_usuario;

    /**
    * @ORM\Column(type="text")
    */
    private $comentario;

    /**
    * @ORM\OneToMany(targetEntity="PostComentarioResposta", mappedBy="id_comentario")
    */
    private $respostas;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->respostas = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get idComentario.
     *
     * @return int
     */
    public function getIdComentario()
    {
        return $this->id_comentario;
    }

    /**
     * Set comentario.
     *
     * @param string $comentario
     *
     * @return PostComentario
     */
    public function setComentario($comentario)
    {
        $this->comentario = $comentario;

        return $this;
    }

    /**
     * Get comentario.
     *
     * @return string
     */
    public function getComentario()
    {
        return $this->comentario;
    }

    /**
     * Set idPost.
     *
     * @param \Entities\Posts\Model\Post $idPost
     *
     * @return PostComentario
     */
    public function setIdPost(\Entities\Posts\Model\Post $idPost)
    {
        $this->id_post = $idPost;

        return $this;
    }

    /**
     * Get idPost.
     *
     * @return \Entities\Posts\Model\Post
     */
    public function getIdPost()
    {
        return $this->id_post;
    }

    /**
     * Set idUsuario.
     *
     * @param \Entities\Usuario\model\Usuario $idUsuario
     *
     * @return PostComentario
     */
    public function setIdUsuario(\Entities\Usuario\model\Usuario $idUsuario)
    {
        $this->id_usuario = $idUsuario;

        return $this;
    }

    /**
     * Get idUsuario.
     *
     * @return \Entities\Usuario\model\Usuario
     */
    public function getIdUsuario()
    {
        return $this->id_usuario;
    }

    /**
     * Add resposta.
     *
     * @param \Entities\Posts\Model\PostComentarioResposta $resposta
     *
     * @return PostComentario
     */
    public function addResposta(\Entities\Posts\Model\PostComentarioResposta $resposta)
    {
        $this->respostas[] = $resposta;

        return $this;
    }

    /**
     * Remove resposta.
     *
     * @param \Entities\Posts\Model\PostComentarioResposta $resposta
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeResposta(\Entities\Posts\Model\PostComentarioResposta $resposta)
    {
        return $this->respostas->removeElement($resposta);
    }

    /**
     * Get respostas.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getRespostas()
    {
        return $this->respostas;
    }
}
