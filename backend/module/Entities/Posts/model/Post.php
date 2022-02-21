<?php
namespace Entities\Posts\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Post")
*/
class Post
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    private $id_post;

    /**
    * @ORM\ManyToOne(targetEntity="Entities\Usuario\model\Usuario", inversedBy="id_post")
    * @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_usuario;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $conteudo;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $titulo;

    /**
    * @ORM\OneToMany(targetEntity="PostComentario", mappedBy="id_post", cascade={"remove"})
    */
    private $comentarios;

    /**
    * @ORM\OneToMany(targetEntity="PostAcoes", mappedBy="id_post", cascade={"remove"})
    */
    private $post_acoes;

    /**
    * @ORM\OneToMany(targetEntity="Entities\Aplicacao\Model\Denuncia", mappedBy="id_post")
    */
    private $denuncias;

    /**testar cascade
    * @ORM\ManyToMany(targetEntity="Entities\Posts\Model\Post", mappedBy="id_post", cascade={"remove"})
    */
    private $tags;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->comentarios = new \Doctrine\Common\Collections\ArrayCollection();
        $this->post_acoes = new \Doctrine\Common\Collections\ArrayCollection();
        $this->denuncias = new \Doctrine\Common\Collections\ArrayCollection();
        $this->tags = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get idPost.
     *
     * @return int
     */
    public function getIdPost()
    {
        return $this->id_post;
    }

    /**
     * Set conteudo.
     *
     * @param string $conteudo
     *
     * @return Post
     */
    public function setConteudo($conteudo)
    {
        $this->conteudo = $conteudo;

        return $this;
    }

    /**
     * Get conteudo.
     *
     * @return string
     */
    public function getConteudo()
    {
        return $this->conteudo;
    }

    /**
     * Set titulo.
     *
     * @param string $titulo
     *
     * @return Post
     */
    public function setTitulo($titulo)
    {
        $this->titulo = $titulo;

        return $this;
    }

    /**
     * Get titulo.
     *
     * @return string
     */
    public function getTitulo()
    {
        return $this->titulo;
    }

    /**
     * Set idUsuario.
     *
     * @param \Entities\Usuario\model\Usuario $idUsuario
     *
     * @return Post
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
     * Add comentario.
     *
     * @param \Entities\Posts\Model\PostComentario $comentario
     *
     * @return Post
     */
    public function addComentario(\Entities\Posts\Model\PostComentario $comentario)
    {
        $this->comentarios[] = $comentario;

        return $this;
    }

    /**
     * Remove comentario.
     *
     * @param \Entities\Posts\Model\PostComentario $comentario
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeComentario(\Entities\Posts\Model\PostComentario $comentario)
    {
        return $this->comentarios->removeElement($comentario);
    }

    /**
     * Get comentarios.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getComentarios()
    {
        return $this->comentarios;
    }

    /**
     * Add postAco.
     *
     * @param \Entities\Posts\Model\PostAcoes $postAco
     *
     * @return Post
     */
    public function addPostAco(\Entities\Posts\Model\PostAcoes $postAco)
    {
        $this->post_acoes[] = $postAco;

        return $this;
    }

    /**
     * Remove postAco.
     *
     * @param \Entities\Posts\Model\PostAcoes $postAco
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removePostAco(\Entities\Posts\Model\PostAcoes $postAco)
    {
        return $this->post_acoes->removeElement($postAco);
    }

    /**
     * Get postAcoes.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPostAcoes()
    {
        return $this->post_acoes;
    }

    /**
     * Add denuncia.
     *
     * @param \Entities\Aplicacao\Model\Denuncia $denuncia
     *
     * @return Post
     */
    public function addDenuncia(\Entities\Aplicacao\Model\Denuncia $denuncia)
    {
        $this->denuncias[] = $denuncia;

        return $this;
    }

    /**
     * Remove denuncia.
     *
     * @param \Entities\Aplicacao\Model\Denuncia $denuncia
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeDenuncia(\Entities\Aplicacao\Model\Denuncia $denuncia)
    {
        return $this->denuncias->removeElement($denuncia);
    }

    /**
     * Get denuncias.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getDenuncias()
    {
        return $this->denuncias;
    }

    /**
     * Add tag.
     *
     * @param \Entities\Posts\Model\Post $tag
     *
     * @return Post
     */
    public function addTag(\Entities\Posts\Model\Post $tag)
    {
        $this->tags[] = $tag;

        return $this;
    }

    /**
     * Remove tag.
     *
     * @param \Entities\Posts\Model\Post $tag
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeTag(\Entities\Posts\Model\Post $tag)
    {
        return $this->tags->removeElement($tag);
    }

    /**
     * Get tags.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getTags()
    {
        return $this->tags;
    }
}
